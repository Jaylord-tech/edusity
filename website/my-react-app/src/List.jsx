function List(props){

//fruits.sort((a,b)=>a.name.localeCompare(b.name));
// fruits.sort((a,b)=> a.calories  - b.calories )
const category = props.category
const itemList = props.items

const List = itemList.map(items => <li key = {items.id}>
                                         {items.name}: &nbsp;
                                      <b> {items.calories}</b> </li>)
return(

   <>
 <h3 className="csategory">{category}</h3>
   <ol className="listItems"> {List}</ol>
   </>
);
}
export default List