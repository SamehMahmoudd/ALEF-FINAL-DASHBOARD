import axios from "axios";



function Book() {
    
    function handleSubmit(eve){
        eve.preventDefault()


  let bookData={

    bookTitle: eve.target['bookTitle'].value,
    bookPages: eve.target['bookPages'].value,
    price:     eve.target['price'].value,
    publishedYear:eve.target['publishedYear'].value,
    description:eve.target['description'].value,
    stock:eve.target['stock'].value


  }
  console.log(bookData);
        axios.post('http://localhost:3001/books/',bookData,{headers:{authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw'}}).then(data=>{

            console.log(data);
            
        }).catch(err=>{console.log(err);})


    }





    return <>
    <div className="container mt-5">
    <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Book Title :</label>
          <input type="text" name="bookTitle" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Book Title" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Book pages :</label>
          <input type="number" name="bookPages" className="form-control" id="exampleInputPassword1" placeholder="Enter Book pages" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price :</label>
          <input type="number" name="price" className="form-control" id="exampleInputPassword1" placeholder="Enter Price" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Published Year :</label>
          <input type="number" name="publishedYear" className="form-control" id="exampleInputPassword1" placeholder="Enter Published Year" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description :</label>
          <input type="text" name="description" className="form-control" id="exampleInputPassword1" placeholder="Enter Description" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Stock :</label>
          <input type="number" name="stock" className="form-control" id="exampleInputPassword1" placeholder="Enter Published Year" />
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        
    </div>
      
    </>;
}

export default Book;