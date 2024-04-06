document.querySelector('form'.addEventListener('submit',function(event))
{

    event.preventDefault();
    const inputvalue = document.getElementById('fruit-to-add').value;
});

if( inputvalue.trim()! =='')
{

const newLi = document.createElement('li');
newLi.classList.add('fruit');
newLi.textContent = inputvalue;

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-btn');
deleteButton.textContent = 'x';
const editButton = document.createElement('button');

editButton.classList.add('edit-btn');
editButton.textContent = 'edit';
newLi.appendChild( deleteButton);
newLi.appendChild(editButton);

document.querySelector(.'fruits'.appendChild(newLi));
document.getElementById('fruits-to-add');
value = '';

}

document.querySelector('.fruits').addEventListener('click', function(event) 
{
    if (event.target.classList.contains('delete-btn')) 
    {
        event.target.parentElement.remove();
    }
});


const fruitElements = document.querySelectorAll('.fruit');
fruitElements.forEach(fruit => 
    {
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    fruit.appendChild(editButton);
});