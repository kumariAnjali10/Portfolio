
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
   <BentoGrid>
    {[
      {title: 'Title1', description: 'Desc1',id:1},
      {title: 'Title2', description: 'Desc2',id:2},
      {title: 'Title3', description: 'Desc3',id:3},
      {title: 'Title4', description: 'Desc4',id:4},
    
    ].map
     ((item) => (
        <BentoGridItem
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        />
    ))}

   </BentoGrid>
    </section>
  )
}

export default Grid
