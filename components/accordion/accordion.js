const projectsArray = [
  {
    title: 'test title',
    description: 'test description test description test description test description test description test description',
    listItem1: 'list item 1',
    listItem2: 'list item 2',
    listItem3: 'list item 3',
    deploymentLink: 'deployment link',
    repoLink: 'repo link'
  }
];

// component function
/*
<div class='title'>
  <div class='description'>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      </ul>
  </div>
  <div class='deployed'></div>
  <div class='repo'></div>
</div>
*/

function Accordion(Obj) {
  // create elements
  const divTitle = document.createElement('div');
  const divDescription = document.createElement('div');
  const uList = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const divDeployed = document.createElement('div');
  const divRepo = document.createElement('div');

  // add classes to elements
  divTitle.classList.add('title');
  divDescription.classList.add('description');
  divDeployed.classList.add('deployed');
  divRepo.classList.add('repo');

  // add content to elements
  divTitle.innerText = Obj.title;
  divDescription.innerText = Obj.description;
  listItem1.innerText = Obj.listItem1;
  listItem2.innerText = Obj.listItem2;
  listItem3.innerText = Obj.listItem3;
  divDeployed.innerText = Obj.deploymentLink;
  divRepo.innerText = Obj.repoLink;

  // arrange elements
  divTitle.appendChild(divDescription);
  divDescription.appendChild(uList);
  uList.appendChild(listItem1);
  uList.appendChild(listItem2);
  uList.appendChild(listItem3);
  divTitle.appendChild(divDeployed);
  divTitle.appendChild(divRepo);

  const projectSection = document.querySelector('.project-section');
  projectSection.appendChild(divTitle);



  console.log(divTitle);

}

Accordion(projectsArray[0]);
