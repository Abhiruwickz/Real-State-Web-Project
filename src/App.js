import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";
import Footer from "./Footer";
import PropertyDetail from "./PropertyDetail";
import AdvancedSearchForm from "./AdvancedSearchForm";
import Header from "./header";



function App() {
  //State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType,setFilterType] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [favourites, setFavourites] = useState ([]);
  const [showAdvancedSearch , setShowAdvancedSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle property click
  const handlePropertyClick = (property) =>{
    setSelectedProperty({
      ...property,
      description: property.description || "",
      bedrooms: property.Bedrooms || 0,
      postalCode: property.PostalCode || "",
      location: property.location || "",
      type: property.Type || "",
      accomodation: property.Accomodation || "",
      dateAdded: property.dateAdded || "" 
      

    });
    
    setIsModelOpen(true);
  };
  // Function to close property detail model
  const handleCloseModel = ()=>{
    setIsModelOpen(false);
  }
  // Function to handle the filter change
  // Function to add a property to favourites
  const handleAddToFavourites = (property) => {
    console.log('adding to favourites: ', property);
    if (!favourites.find((fav) => fav.id === property.id)){
      setFavourites((prevFavourites) => [...prevFavourites,property]);
    }
    console.log('updated favourites: ', favourites);
  };
  // Function to remove all properties
    const handleRemoveAll = () =>{
      setFavourites([]);
    }
  //Functions to drag and drop from favourite box  
    const handleDragStart = (event, property) => {
      event.dataTransfer.setData('property', JSON.stringify(property));
    };
    
    const handleDragOverOutside = (event) => {
      
      event.preventDefault();
    };
    const handleDragOver = (event) => {

      event.preventDefault();
    };
  
  const handleDropOutside = (event) => {
    const droppedProperty = JSON.parse(event.dataTransfer.getData('property'));
    setFavourites((prevFavourites) => prevFavourites.filter((fav) => fav.id !== droppedProperty.id));
  };
  const [selectedAccommodation, setSelectedAccomodation] = useState(null);

  // Function to handle advanced search button click
    const handleAdvancedSearchButtonClick = () => {
      setShowAdvancedSearch(!showAdvancedSearch);
    };
  // Function to handle the form submission in advanced search
    const handleSubmit = (filteredProperties) => {
      setSearchResults(filteredProperties);
      setShowAdvancedSearch(false);
  };

    
   
   

  return (    
    <>
    <div>
      <Header/>
    </div>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
           
          }} />
        </div>
        <button className="advanced" onClick={handleAdvancedSearchButtonClick}>Show Advaced Search</button>
          {showAdvancedSearch && <AdvancedSearchForm onSearch={handleSubmit} onClose = {()=>setShowAdvancedSearch(false)} data={data} />}
        <div className="buttonContainer">
          <button className="buy" onClick={() => setSelectedAccomodation("Buy")}>Buy</button>
          <button className = "rent" onClick={() => setSelectedAccomodation("Rent")}>Rent</button>  
        </div>
        
        <div className="template_Container">
          
        {
        data 
          .filter((val) => {
            if(searchTerm === "" && !filterType && (!selectedAccommodation || val.selectedAccommodation)){
              return val;
            } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) && (!filterType || val.Type.toLowerCase()===filterType)&&
            (!selectedAccommodation || val.Accomodation === selectedAccommodation)){
              return val;
            }
          })
          .map((val) => (
            <div className="template" key={val.id} onClick={() => handlePropertyClick(val)}>
              <img src={val.image} alt="" className="property-image" />
              <h3>{val.title}</h3>
              <p className="price">${val.price}</p>
              <button className="Favourites" onClick={(e) => {e.stopPropagation(); handleAddToFavourites(val);}}>
                Add to Favourites
              </button>
            </div>
          ))
      }

        </div>
      </div>
      <div className="container-outside" onDragOver={handleDragOverOutside} onDrop={handleDropOutside}>
   
      <Footer/>
      {isModelOpen && selectedProperty && <PropertyDetail property={selectedProperty} onClose={handleCloseModel} />}
      {favourites.length > 0 && (
        <div className="favourite-box" onDragOver={handleDragOver} onDrop={handleDropOutside}>
          <div className="favourite-header">
            <h2>Favourites</h2>
          </div>
          <ul>
            {favourites.map((fav) => (
              <li key={fav.id}draggable = "true" onDragStart={(e)=>handleDragStart(e,fav)}onDragEnd={handleDropOutside}>
                <img src={fav.image} alt={fav.title} />
                <h3>{fav.title}</h3>
                <p className="price">${fav.price}</p>
              </li>
            ))}
          </ul>
          <button className="removeall" onClick={handleRemoveAll}>Remove All</button>
        </div>
      )}
  
     
        {/* Your existing content */}
      </div>
    </>
    
  );
}

export default App;

