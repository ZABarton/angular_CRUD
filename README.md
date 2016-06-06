# angular_CRUD
Building a CRUD app with Express and Angular

## Summary
A simple web app using the MEAN stack to create, read, update, and delete resources.

### Create
Users can add an item to the marketplace by specifying an item name, description, and price.
Items will default to "available" status.
Price input has type validation for floating numbers.

### Read
Clicking on the item name will bring up a larger page displaying that item's properties only.
Users can update the resource from this page.

### Update
Users can edit the item name, description, and price from the resource show page.
The new text will display in real time as it is edited.
Users can also click a checkbox to change the boolean value for the availability status.
Users must click the update button to save changes to the database.

### Delete
Users can remove an item from the marketplace by clicking the appropriate button.
A confirmation dialog will appear before the resource is deleted.
