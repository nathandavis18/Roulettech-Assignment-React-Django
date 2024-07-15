import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recipe.css';

function RecipeDetails(){
    const [content, setContent] = useState([]);
    const location = useLocation();
    const id = location.state.id;
    const fetchUrl = 'http://34.228.197.39:8000/api/recipe/details/' + id;
    useEffect(() =>{
        fetch(fetchUrl).then(result => result.json()).catch(error => console.log(error))
        .then(result => setContent(result)).catch(error => console.log(error));
    }, [])
    console.log(content);
    return(
        <>
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6 text-center details">
                    <pre>
                        <img src={content.image} title={content.name + " Image"} className="detailsImg"/><br />
                        <h2>{content.name}</h2>{content.description}<br /><br />

                        <h4>Ingredients</h4>
                        {content.ingredients}<br /><br />
                        <h4>Steps</h4>
                        {content.steps}<br />
                    </pre>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6 text-center">
                    <br/>
                    <Button as={Link} to="/Recipes" variant="secondary" className="recipeBtn">Back to List</Button>
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}

export default RecipeDetails;