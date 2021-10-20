import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

interface LoginProps {
	joinRoom: (obj: any) => void;
	isLoggedIn: boolean;
}

const Login = (props: LoginProps) => {
	const { joinRoom, isLoggedIn } = props;
	// const [ sdkKey, setSdkKey ] = useState("");
	// const [ secretKey, setSecretKey ] = useState("");
	const [ roomName, setRoomName ] = useState("session_name");
	const [ userName, setUserName ] = useState("web123");
	const [ signature, setSignature ] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoidHE5QjJnU0pJMXp5Q2FyYXdGMWlkcjdDc2R6RTNNUURsbXVqIiwidmVyc2lvbiI6MSwidXNlcl9pZGVudGl0eSI6IndlYjEyMyIsInRwYyI6InNlc3Npb25fbmFtZSIsImlhdCI6MTYzNDcxMDIyMiwiZXhwIjoxNjM0Nzk2NTQzfQ.KFrIHP6oqavPkUs8j4r5TL3wYimtlGY0DF9FqXi2TBQ");
	const history = useHistory();

	useEffect(() => {
		if (isLoggedIn) {
			history.push("/home")
		}
	}, [isLoggedIn]);

	const onJoin = () => {
		if (roomName && userName && signature) {
			joinRoom({
				roomName, userName, signature
			});
		} else alert("Please fill all input fields");
	};

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"}}>
			{/* <input type="text" placeholder="Enter Zoom SDK Key" value={sdkKey} onChange={(e) => setSdkKey(e.target.value)}/>
			<br/> */}
			{/* <input type="text" placeholder="Enter Zoom Secret Key" value={secretKey} onChange={(e) => setSecretKey(e.target.value)}/>
			<br/> */}
			<input type="text" placeholder="Enter Topic Name" value={roomName} onChange={(e) => setRoomName(e.target.value)}/>
			<br/>
			<input type="text" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
			<br/>
			<input type="text" placeholder="Enter Signature" value={signature} onChange={(e) => setSignature(e.target.value)}/>
			<br/>
			<button type="button" onClick={onJoin}>Join Room</button>
		</div>
	);
};

export default Login;