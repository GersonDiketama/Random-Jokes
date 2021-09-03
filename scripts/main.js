
const btn = document.querySelector('button')

btn.addEventListener('click', (e) =>
        
{
    fetch("https://icanhazdadjoke.com",
{
    headers:
    {
        Accept:"application/json"
    }
}

)
.then(response => response.json())
.then(data => 
    {
        const view = document.querySelector('.display')
  
          view.innerHTML =` <span class = "text">${data.joke}</span><span class= "emoji">😂</span>`
        
    }

    )
       
    }
    
    );

