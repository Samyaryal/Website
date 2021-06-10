import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583153693/Screen_Shot_2020-03-02_at_2.53.30_PM_w8febo.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Full-stack web app</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/Samyaryal/Full-Stack-Web-app" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> React, Redux, MongoDB, Node, Express. </div>
					</Card>

					{/* Project 2 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611048304/cat_facts_mbqgpo.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Fetching Cat Facts API</CardText>
                        <CardActions border className="button-bootstrap">
                            <a href="https://github.com/Samyaryal/Cat-Facts" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							<a
								href="https://samyaryal.github.io/Cat-Facts/"
								rel="noopener noreferrer"
								target="_blank"
                            >
                            <Button colored>Live Demo</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> ReactJS, Fetched_API </div>
					</Card>

					{/* Project 3 portfolio */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611237736/Portfolio_cll8m9.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Portfolio</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/Samyaryal/Myportfoliosite" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">ReactJS </div>
					</Card>

					{/* Project 4 API  SHOPPING*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611048472/React_Form_yhgera.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used"> React Form Validation</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/Samyaryal/React_form_validation" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
                            </a>
                            <a
								href="https://samyaryal.github.io/React_form_validation/"
								rel="noopener noreferrer"
								target="_blank"
                            >
                            <Button colored>Live Demo</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">ReactJS </div>
					</Card>


					{/* Project 7 Recipe-search */}
					
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
					<CardTitle
						style={{
							
							height: '176px',
							background:
								'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611048567/Recipe_Pic_tl2qzi.png) center / cover',
						}}
					></CardTitle>
					<CardText className="text-used">Search Recipe of your favourite food.</CardText>
					<CardActions border className="button-bootstrap">
						<a href="https://github.com/Samyaryal/Recipe-search" rel="noopener noreferrer" target="_blank">
							<Button colored>GitHub</Button>
													</a>
													<a
							href="https://samyaryal.github.io/Recipe-search/"
							rel="noopener noreferrer"
							target="_blank"
												>
													<Button colored>Live Demo</Button>
						</a>
						
					</CardActions>
					<CardMenu style={{ color: '#fff' }}>
						<IconButton name="share" />
					</CardMenu>
					<div className="Tech-used">ReactJS, API </div>
				</Card>

				{/* Project 5 Calculator */}
				<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
					<CardTitle
						style={{
							
							height: '176px',
							background:
								'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611048620/Calculator_ultweg.png) center / cover',
						}}
					></CardTitle>
					<CardText className="text-used">A simple Calculator using ReactJS</CardText>
					<CardActions border className="button-bootstrap">
						<a href="https://github.com/Samyaryal/Calculator" rel="noopener noreferrer" target="_blank">
							<Button colored>GitHub</Button>
													</a>
													<a
							href=" https://samyaryal.github.io/Calculator/"
							rel="noopener noreferrer"
							target="_blank"
												>
												<Button colored>Live Demo</Button>
						</a>
						
					</CardActions>
					<CardMenu style={{ color: '#fff' }}>
						<IconButton name="share" />
					</CardMenu>
					<div className="Tech-used">ReactJS </div>
				</Card>


					{/* Project 5 Mini-Youtube */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
							
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583313521/Screenshot_2020-03-04_at_11.18.15_bt1ame.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Mini Youtube</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/Samyaryal/Mini-youtube" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React, Redux </div>
          </Card>
          
          {/* Project 6 Developers API*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              height: '176px',
              background:
                'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611048862/Weather_ycfj4o.png) center / cover',
            }}
          ></CardTitle>
          <CardText className="text-used"> Weather APP </CardText>
          <CardActions border className="button-bootstrap">
            <a href="https://github.com/Samyaryal/WeatherAPP" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://weatherapp-46e6b.firebaseapp.com/"
				rel="noopener noreferrer"
				target="_blank"
                >
            <Button colored>Live Demo</Button>
			</a> 
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
          <div className="Tech-used">ReactJS </div>
		</Card>


		
		{/* Project 7 Developers API*/}
		<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
		<CardTitle
		  style={{
			
			height: '176px',
			background:
			  'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1611238575/TYPESCRIPT_jn8ymr.png) center / cover',
		  }}
		></CardTitle>
		<CardText className="text-used">TypeScript Journey</CardText>
		<CardActions border className="button-bootstrap">
		  <a href="https://github.com/Samyaryal/Learning_TypeScript" rel="noopener noreferrer" target="_blank">
			<Button colored>GitHub</Button>
		  </a>
		 
		</CardActions>
		<CardMenu style={{ color: '#fff' }}>
		  <IconButton name="share" />
		</CardMenu>
		<div className="Tech-used">TypeScript</div>
	  </Card>

			</div>
			);
		}
	}
	render() {
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
					<Tab>Projects Using different technologies</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Projects;
