import React from 'react'
import {List, Button} from 'antd';

const FollowingList = ({header, data}) => {
  return (
    <List 
        style={{marginBottom: 20}}
        grid={{gutter: 4, xs: 2, md: 3}}
        size="small"
        header = {<div>{header}</div>}
        loadMore = {<div style={{textAlign: 'center', margin: '10px 0'}}><Button>Load More</Button></div>}
        bordered
        dataSource = {data}
        renderItem={(item) => (
            <List.Item style = {{marginTop: 20}}></List.Item>
        )}
    />
  )
}

export default FollowingList
