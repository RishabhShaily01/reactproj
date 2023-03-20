import{ useEffect,useState} from "react"
import{useParams} from 'react-router-dom';
import{ Grid,Button,Image} from 'semantic-ui-react';
import { getRecipe } from "../services/api";
const RecipeDetails = () =>{
    const[recipe,setRecipe]=useState({});
    const{recipeId}=useParams();
    useEffect(() => {
        const getData=async ()=>{
          let result=  await getRecipe(recipeId)
          if(result && result.recipe){
          setRecipe(result.recipe);
        }}
            getData();},[])
    return(

Object.keys(recipe).length > 0 ?
<Grid container stackable columns={2}>
    <Grid.Column>
        <Button 
        
        />
       < Image src={recipe.image_url} />
        </Grid.Column> 

</Grid>: null
        ) 
}
export default RecipeDetails;