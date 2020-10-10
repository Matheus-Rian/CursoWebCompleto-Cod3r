// @ts-check
//  <ImportConfiguration>

//CONST - variável imutável; O valor dessa variável não pode ser alterado. 
//Linha 6,7,8: Carregando os arquivos e armazenando na const(variável)
const CosmosClient = require("@azure/cosmos").CosmosClient; 
const config = require("./config"); 
const dbContext = require("./data/databaseContext"); 
//  </ImportConfiguration>

//  <DefineNewItem>
const newItem = { //Iniciando um objeto
  id: "3",
  category: "fun",
  name: "Cosmos DB",
  description: "Complete Cosmos DB Node.js Quickstart ⚡",
  isComplete: false
};
//  </DefineNewItem>

async function main() { //retorna um objeto AsyncFunction.
  
  // <CreateClientObjectDatabaseContainer>
  const { endpoint, key, databaseId, containerId } = config; // destructuring assignment

  const client = new CosmosClient({ endpoint, key }); // Classe

  const database = client.database(databaseId); //Método da classe
  const container = database.container(containerId); //Método da classe

  // Make sure Tasks database is already setup. If not, create it.

  await dbContext.create(client, databaseId, containerId); /* Await - utilizado para esperar por uma Promise(Promessa).
                                                            P.S: Ele pode ser usado apenas dentro de uma async function.*/

  // </CreateClientObjectDatabaseContainer>
  
  try { // Irá realizas ações buscando o sucesso, mas caso der erro o controle irá para o catch
    // <QueryItems>
    console.log(`Querying container: Items`);

    // query to return all items
    const querySpec = {
      query: "SELECT * from c"
    };
    
    // read all items in the Items container
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    items.forEach(item => { //forEach executa uma dada função em cada elemento de um array.
      console.log(`${item.id} - ${item.description}`);
    });
    // </QueryItems>
    
    // <CreateItem>
    /** Create new item
     * newItem is defined at the top of this file
     */
    const { resource: createdItem } = await container.items.create(newItem);
    
    console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`);
    // </CreateItem>
    
    // <UpdateItem>
    /** Update item
     * Pull the id and partition key value from the newly created item.
     * Update the isComplete field to true.
     */
    const { id, category } = createdItem;

    createdItem.isComplete = true;

    const { resource: updatedItem } = await container
      .item(id, category)
      .replace(createdItem);

    console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`); 
    console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
    // </UpdateItem>
    
    // <DeleteItem>    
    /**
     * Delete item
     * Pass the id and partition key value to delete the item
     */
    const { resource: result } = await container.item(id, category).delete();
    console.log(`Deleted item with id: ${id}`);
    // </DeleteItem>  
    
  } catch (err) { // Se tiver erro esse bloco será chamado
    console.log(err.message);
  }
}

main();