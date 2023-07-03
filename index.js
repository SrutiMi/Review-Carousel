/* 
1.on load first review should be shown for this use ->DOMContentLoaded

2. select all the elements that are needed to be changed

3. create a function that will change the content of the elements

4.on clicking next show the next element in the array

5.on clicking prev show the prev element in the array
*/
let index=0;
document.addEventListener('DOMContentLoaded',()=>{
    updateContent(index);
  });

  //for next button
  document.querySelector('.next').addEventListener('click',()=>{
      index++;
      if(index<data.length){
          updateContent(index);
        }
      if(index>=data.length){
        index=data.length-1;
      }
  });
  
  //for previous button
   document.querySelector('.previous').addEventListener('click',()=>{
      index-=1;
      if(index>=0){
          updateContent(index);
        }
      if(index<0){
        index=0;
      }
  });


  //a common function to change the content of the elements
  function updateContent(index){
          document.querySelector('.js-images').src=`images/${data[index].Image}`;
         document.querySelector('.name').textContent=data[index].name;
          document.querySelector('.occupation').textContent=data[index].occupation;
          document.querySelector('.content').textContent=data[index].review;
  }