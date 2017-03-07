# Mars Rover kata

## Description

Habbr Space corp has sent his first rover to Mars. They have hired us to implement part the robot's software, 
concretely the 'discover' algorithm.

Here is the specification that we have received:
- when the Rover enters the 'discover mode' it executes the movement algorithm until the robot has moved forward 10 times
- the Rover manages it's position using a Vector object composed of a X,Y position and an Orientation 
- the Rover can have 4 Orientations 'N', 'S', 'E' or 'W'
- the movement algorithm consist in:
  - taking a picture with the PanCam module 
  - process the picture by the AI system that decides if there is an obstacle in front of him
  - if there isn't an obstacle then uses the Engine system to move forward 1 in the direction that is facing
  - if there is an obstacle then uses the Engine system to turn right: in example, from 'N'-->'E' or from 'S'-->'W'

## To execute the tests
Open [./SpecRunner.html](./SpecRunner.html)- in a browser.

Hit refresh to re-run the tests.