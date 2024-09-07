import Card from "./Card";

function Tours({tours, removeTour}) {
    return (
        <div className="container">
            <div>
                <h2 className="title"> Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=> {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> // key={tour.id} bcz ek achi practice maani jati hai ki koi ek unique identifier pass kiya jaaye key mein jaise ki yaha id pass kiye aur agar kuch bhi unique nhi hai toh index pass kar dete hai but generally index mpass nhi karna chahiye
                    })
                }
            </div>
        </div>
    );
}

export default Tours;