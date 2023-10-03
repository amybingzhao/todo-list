const { runQuery } = require("./queryHelper")

async function createNewItem(item) {
    const insertItemQuery = `
        INSERT INTO Items (content, columnId)
        VALUES ("${item.content}", ${item.columnId})
    `;
    await runQuery(insertItemQuery)
}

async function updateItem(updatedItem) {
    const updateItemQuery = `
        UPDATE Items
        SET content="${updatedItem.content}", columnId=${updatedItem.columnId}
        WHERE id=${updatedItem.id}
    `
    await runQuery(updateItemQuery)
}

async function getItems() {
    const getItemsQuery = `
        SELECT * FROM Items
    `
    const result = await runQuery(getItemsQuery)
    return result
}

async function getColumns() {
    const getColumnsQuery = `
        SELECT * FROM Columns
    `
    const result = await runQuery(getColumnsQuery)
    return result
}

module.exports = {
    createNewItem, updateItem, getItems, getColumns
}