

const Skills = () => {

    
const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: '/assets/logo.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: '/assets/profile.png',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: '/assets/pfolio1.svg',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: '/assets/profile.png',
      },
      {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: '/assets/profile.png',
      },
      {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: '/assets/profile.png',
      },
    // Add more cards as needed
  ];


  return (
    <div className="carousel">
      
        {cards.map((card, index) => (
          <div key={index} className='bg-[#202328] rounded-3xl flex justify-center items-center' style={{
            boxShadow: "15.35134px 15.35134px 15.35134px 0px rgba(204, 204, 204, 0.25)",
          }}>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
    </div>
  );
};

export default Skills;
