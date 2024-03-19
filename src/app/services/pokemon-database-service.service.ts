import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDatabaseService {
  private readonly dbName = 'pokemonDB';
  private readonly storeName = 'pokemons';

  constructor() { }

  openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = (event) => {
        console.error('Erreur lors de l\'ouverture de la base de données:', event);
        reject(event);
      };

      request.onsuccess = (event) => {
        const db = request.result;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        const db: IDBDatabase = (event.target as any).result;
        const store = db.createObjectStore(this.storeName, { keyPath: 'name' });
        store.createIndex('name', 'name', { unique: true });
      };
    });
  }

  addPokemon(pokemon: any): Promise<void> {
    return this.openDatabase().then(db => {
      return new Promise<void>((resolve, reject) => {
        const tx = db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        const request = store.add(pokemon);
        
        request.onerror = (event) => {
          console.error('Erreur lors de l\'ajout du Pokémon:', event);
          reject(event);
        };

        request.onsuccess = (event) => {
          console.log('Pokémon ajouté avec succès à la base de données');
          resolve();
        };
      });
    });
  }

  getPokemonByName(name: string): Promise<any> {
    return this.openDatabase().then(db => {
      return new Promise<any>((resolve, reject) => {
        const tx = db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);
        const request = store.get(name);
        
        request.onerror = (event) => {
          console.error('Erreur lors de la récupération du Pokémon:', event);
          reject(event);
        };

        request.onsuccess = (event) => {
          const pokemon = request.result;
          resolve(pokemon);
        };
      });
    });
  }
}
