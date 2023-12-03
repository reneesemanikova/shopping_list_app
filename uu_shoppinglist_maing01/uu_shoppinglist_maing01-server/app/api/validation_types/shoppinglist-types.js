/* eslint-disable */

const shoppinglistIdDtoInType = shape({
    id: string().isRequired(),
});

const shoppinglistCreateDtoInType = shape({
    id: string(255),
    name: string(255),
    shoppingListItems: [
        { name:string(255), resolved: false },
        { name: string(255), resolved: false }
    ]
});