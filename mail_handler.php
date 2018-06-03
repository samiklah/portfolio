<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];
		$sub=$_POST['sub'];


		$to='samikla7@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject=$sub;
		$message="Name :".$name."\n"."msg :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
		}
		else{
			echo "<script>Something went wrong!</script>";
		}
	}
	header("Location: index.html");
?>
