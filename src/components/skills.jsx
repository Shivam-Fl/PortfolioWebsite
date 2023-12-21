

const Skills = () => {

    
const cards = [
    {
      title: 'Frontend',
      skills: [
        'HTML/CSS',
        'Javascript',
        'Bootstrap',
        'Tailwind CSS',
        'React.js',
        
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js'
      ]
    },
    {
      title: 'Database',
      skills: [
        'SQL',
        'MongoDB',
        'PostgreSQL',
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Javascript',
        'Java',
        'C',
        
      ]
    },
    
      
  ];


  return (
    <div id="skills" className="max-w-screen-xl p-4 font-outfit">
      <h1 className="text-center text-2xl lg:text-5xl font-semibold z-0 mb-8  ">Skills </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 ">
        {cards.map((items)=>(
          <div key={items.title} className="rounded-xl " style={{border: "1px solid rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay, normal",
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 30px 0px, rgb(255, 172, 228) 0px 0px 5px 0px inset, rgb(147, 117, 182) 0px -1px 8px 0px inset"}}>
          <h2 className="text-center font-bold mt-2" >{items.title}</h2>
          <div className=" p-4 grid grid-cols-2 gap-x-4 gap-y-2 text-center   ">
          {items.skills.map((skill)=>(
            <span key={skill} className="border border-stone-300 rounded-3xl px-2 py-1">{skill}</span>
          ))}
          </div>
            
        </div>
        ))}
    
    </div>
    </div>
  );
};

export default Skills;
