
interface SearchProps {
    bgClass: string;    // For background container class
    formClass: string;  // For form or inner container class
}

const Search: React.FC<SearchProps> = ({ bgClass, formClass }) => {
    return (
        <div className='textContent pt-3 pb-5'>
            <div className={`${bgClass}`}>
                <form action="" method="post" className={`${formClass}`}>
                    <div className="row g-3">
                        {/* Search Keyword Text Field */}
                        <div className="col-12 col-lg">
                            <label htmlFor="">Project Name/location </label>
                            <input 
                                type="text" 
                                name="search" 
                                id="search" 
                                className="formSelect form-control form-control-lg" 
                                placeholder="Search Keyword" 
                            />
                        </div>

                        {/* Community Name Dropdown */}
                        <div className="col-6 col-lg-auto">
                        <label htmlFor="">Community</label>
                            <select title="community" name="community" id="community" className="formSelect form-select form-select-lg">
                                <option value="" hidden>Community Name</option>
                                <option value="DowntownDubai">Downtown Dubai</option>
                                <option value="PalmJumeirah">Palm Jumeirah</option>
                                <option value="BusinessBay">Business Bay</option>
                                <option value="JumeirahLakeTowers">Jumeirah Lake Towers</option>
                            </select>
                        </div>

                        {/* Developer Dropdown */}
                        
                        <div className="col-6 col-lg-auto">
                        <label htmlFor="">Developer</label>
                            <select  title="developer" name="developer" id="developer" className="formSelect form-select form-select-lg">
                                <option value="" hidden>Developer</option>
                                <option value="Emaar">Emaar</option>
                                <option value="DAMAC">DAMAC</option>
                                <option value="Nakheel">Nakheel</option>
                                <option value="Meraas">Meraas</option>
                            </select>
                        </div>
                        <div className="col-6 col-lg-auto">
                        <label htmlFor="">Project Status</label>
                            <select  title="project_status" name="project_status" id="project_status" className="formSelect form-select form-select-lg">
                                <option value="" hidden>Project Status</option>
                                <option value="New Launch">New Launch</option>
                                <option value="Under Contruction">Under Contruction</option>
                                <option value="Ready to Move in">Ready to Move in</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Sold Out">Sold Out</option>
                            </select>
                        </div>
                        {/* Search Button */}
                        <div className="col-6 col-lg-auto mt-auto">
                            <button type="submit" className="btn btn-lg btn-white w-100"> <i className="text-gold bi bi-search"></i> Search</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Search
