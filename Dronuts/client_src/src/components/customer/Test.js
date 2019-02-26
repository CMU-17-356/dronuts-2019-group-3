import React, {Component} from 'react';
import logo from '../../images/dronutbackground.jpg';

class Test extends Component {
  render(){
    return (
    	<div> 
    		<div className="content">
		    	<img src={logo} className="mainImg" />
		    	<div className="about"> 
		    		<h3>About Us</h3><br/>
		    		<h4>We are Dronuts, your local drone donut delivery service.</h4>
		    		<div className="container">
		    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum ex eget convallis volutpat. Nam lacinia dignissim lacus et ultrices. Cras fermentum magna id tortor sollicitudin, non porta urna imperdiet. Vestibulum placerat lacus metus, id congue orci lacinia quis. Vestibulum euismod sodales turpis a accumsan. In hac habitasse platea dictumst. Mauris scelerisque magna dolor. Aliquam et metus ante. Aenean sed arcu non velit iaculis commodo. Curabitur auctor libero lobortis lectus porttitor, nec placerat mi sodales. Fusce et enim suscipit, dignissim diam quis, dignissim erat. Vestibulum rutrum lacinia risus, eget consectetur quam pharetra vel. Aenean suscipit turpis et turpis euismod, sed placerat ante gravida. Curabitur a tempor eros. Donec commodo risus vel augue efficitur ullamcorper. Nulla id nulla finibus, congue nisi non, congue nunc.</p><br/>
		    		<p>Integer sed efficitur nibh. Pellentesque posuere nulla a ullamcorper luctus. Aenean posuere in elit sed egestas. Morbi orci leo, scelerisque vitae neque ut, bibendum pulvinar urna. Sed tristique suscipit sem. Aliquam ac faucibus elit. Nullam eget dolor eu magna aliquam vehicula sit amet a purus. Nulla sed sem vestibulum, blandit augue aliquam, mattis turpis. Proin mi augue, dignissim in lectus sit amet, feugiat consectetur turpis.</p>
		    		</div>
		    	</div>
		    	<div className="location">
		    		<h3>Location</h3>
		    		<p>
				      <b>5000 Forbes Ave, Pittsburgh, PA 15213</b>
				      <br />
				      <b>Hours:</b>8:00am - 10:00pm everyday
				      <br />
				      <b>Phone:</b> 412-000-0000
				    </p>
		    	</div>
	    	</div>
	    	<footer className="footer">
		      <div className="container">
		        <span className="text-muted">Dronuts Group 3</span>
		      </div>
			</footer>
		</div>
    )
  }
}

export default Test;
