import React from 'react'

function MemberDetail(props){
    console.log(props.match.params.id)
    return (
        <div>MemberDetail</div>
    )
}

export default MemberDetail