// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
    axios.get(" https://lambda-times-api.herokuapp.com/topics")
        .then((res) =>{
            const newTab = tabMaker(res)
            tabContent.appendChild(newTab)
            console.log(res);
        })
        .catch((err) =>{
            console.log(`Error:${err}`);
        })


    function tabMaker (obj){
        let tab1 = document.createElement('div');
        tab1.classList.add('tab')
        tab1.textContent = obj.data.topics[0]

        let tab2 = document.createElement('div');
        tab2.classList.add('tab')
        tab2.textContent = obj.data.topics[1]
        tab1.appendChild(tab2);

        let tab3 = document.createElement('div');
        tab3.classList.add('tab')
        tab3.textContent = obj.data.topics[2]
        tab1.appendChild(tab3);

        let tab4 = document.createElement('div');
        tab4.classList.add('tab')
        tab4.textContent = obj.data.topics[3]
        tab1.appendChild(tab4);

        let tab5 = document.createElement('div');
        tab5.classList.add('tab')
        tab5.textContent = obj.data.topics[4]
        tab1.appendChild(tab5);

        let tab6 = document.createElement('div');
        tab6.classList.add('tab')
        tab6.textContent = obj.data.topics[5]
        tab1.appendChild(tab6);

        return tab1
    }
    
    let tabContent = document.querySelector('.topics')
   
   





