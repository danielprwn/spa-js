export function Home() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h1>THE BEST SPA HOME PAGE!</h1>
    
    <h3>Welcome in the best spa web in the Wrold!</h3>
    <p class="home-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    
    <img class ="image1" src="https://cdn.pixabay.com/photo/2015/07/20/23/08/spa-853462_960_720.jpg">
    
    <br><hr>

    <h3>Relax with SPA!</h3>
    <p class="home-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    
    <img class ="image2" src="https://cdn.pixabay.com/photo/2015/11/03/16/54/wellness-1021131_960_720.jpg">

    
  `;

  return section;
}
