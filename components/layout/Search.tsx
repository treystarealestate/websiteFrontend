import Link from 'next/link';
import Image from 'next/image';

const Search = () => {
    return (
        <div className='textContent pt-3 pb-5'>
            <div className='bgSearch'>
                <form action="" method="post" className="formSearch">
                    <div className="row g-3">
                        {/* Search Keyword Text Field */}
                        <div className="col-auto col-lg">
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
                        <div className="col-auto col-lg-auto">
                        <label htmlFor="">Community</label>
                            <select name="community" id="community" className="formSelect form-select form-select-lg">
                                <option value="" hidden>Community Name</option>
                                <option value="DowntownDubai">Downtown Dubai</option>
                                <option value="PalmJumeirah">Palm Jumeirah</option>
                                <option value="BusinessBay">Business Bay</option>
                                <option value="JumeirahLakeTowers">Jumeirah Lake Towers</option>
                            </select>
                        </div>

                        {/* Developer Dropdown */}
                        <div className="col-auto col-lg-auto">
                        <label htmlFor="">Developer</label>
                            <select name="developer" id="developer" className="formSelect form-select form-select-lg">
                                <option value="" hidden>Developer</option>
                                <option value="Emaar">Emaar</option>
                                <option value="DAMAC">DAMAC</option>
                                <option value="Nakheel">Nakheel</option>
                                <option value="Meraas">Meraas</option>
                            </select>
                        </div>

                        {/* Search Button */}
                        <div className="col-auto col-lg-auto mt-auto">
                            <button type="submit" className="btn btn-lg btn-white w-100"> <i className="text-gold bi bi-search"></i> Search</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Search
