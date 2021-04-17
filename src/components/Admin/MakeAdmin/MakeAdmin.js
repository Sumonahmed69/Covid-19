import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const MakeAdmin = () => {
    return (
        <section className='row '>
            <div className="col-md-4">
                <SidebarAdmin></SidebarAdmin>
            </div>
            <div className="col-md-6 mt-5">
                <h4>Email</h4>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="admin@xyz.com" aria-label="Username" aria-describedby="addon-wrapping " />
                </div>
            </div>

        </section>
    );
};

export default MakeAdmin;