

function Header ({ searchQuery, setSearchQuery,}) {

    return(
        <header>
            <div>
                <div>BOOLFLIX</div>

                <div>
                    <input 
                        type="text" 
                        placeholder="Searching for something?"
                        />
                </div>
                <button>Search</button>
            </div>
        </header>
    )
}