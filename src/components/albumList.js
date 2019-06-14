import React from 'react';

const  AlbumList = (props) => {

    const showList = ({albumList}) => {
        //console.log(props);
        if(albumList){
            return albumList.map((item, index) => { // index is number of iteration 0,1,2,....
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`} />
                )
            })
        }
    }

    return(
        <div className='albums_list'>
            {showList(props)}
        </div>
    )
}

export default  AlbumList;
