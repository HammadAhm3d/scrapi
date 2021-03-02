import React, { useState, useEffect } from 'react'
import {firestore} from '../firebase';

const DB = () => {
    const[totalUsers, setTotalUsers] = useState(0);
    const[userList, setUserList] = useState([]);

    useEffect(() => {
        let chartData = [{}];
        firestore.collection("AppUsers")
                .where('isUser', '==', true)
                .get()
                .then(querySnapshot => {
                        setTotalUsers(querySnapshot.size);
                        // chartData = querySnapshot.docs.map(doc => {
                        //     {
                        //         id: doc.id,
                        //         data: doc.data()
                        //     }
                        // });
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                            chartData.push(doc.data())
                        });
                        setUserList(chartData);
                        userList.map(item => console.log(item));
                        })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
                console.log(userList);
    }, [])
    

    // firebase.database().ref('Users/').then(querySnapshot => {
    //     setTotalUsers(querySnapshot.size);
    // })
    // console.log(totalUsers);
    
    return (
        <div>
            App users: {totalUsers}
        </div>
    )
}

export default DB
