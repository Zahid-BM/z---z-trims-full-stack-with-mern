import React from 'react';
import useProfiles from '../../hooks/useProfiles';

const MakeAdmin = () => {
    const [allProfiles, setAllProfiles] = useProfiles();
    return (
        <div>
            <h1 className="text-warning text-center">Total Profiles : {allProfiles.length}</h1>
        </div>
    );
};

export default MakeAdmin;