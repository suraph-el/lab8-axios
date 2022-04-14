import React, {useState} from 'react'
import Posts from '../component/Posts'
import PostDetails from '../component/PostDetails'
import NewPost from '../component/NewPost'

const Dashboard = () => {

  const [fetchFlag, setFetchflag] = useState(true);
  const [selectedState, setSelectedState] = useState(0);

  const changeFetchFlag = () => {
      setFetchflag(!fetchFlag);
  }

  const setSelected = (id) => {
      setSelectedState(id);
  }

  return (
    <div>
    <section className="Posts">
       <Posts
       setSelected={setSelected}
       fetchFlag={fetchFlag}/>
    </section>
    <section>
        <PostDetails 
        id={selectedState}
        changeFetchFlag={changeFetchFlag} />  

    </section>
    <section>
      <NewPost changeFetchFlag={changeFetchFlag} />
    </section>
</div>
  )
}

export default Dashboard;