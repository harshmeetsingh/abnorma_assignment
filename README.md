##Project for Abnormal Security

####Steps to Run

1. Unzip the file that is shared for this project or download it from this url

2. Goto root directory which is named abnormal_assignment

3. Open terminal, run command `npm install`

4. After the packages have been successfully installed run comman `npm start`

5. The server will start on `localhost:3000`. Note: Please make sure nothing else is running on the above mentioned port.

6. To run tests use command `npm run test`

###Implementation Details

- Have implemented all the components from scratch and have avoided using external libraries.

- Have not used any libraries for writing css

- Implemented React query for making api calls instead of axios which makes the code much more cleaner and is the advised norm

- Implement api calls with react query making sure to follow the guidelines of separation of concerns concept.

- Have Implemented the DropDown component in a way which makes it very much re-useable across the app or any other app (if we want to publish it for external use)

- Have kept the state management logic at top level for simplicity as the project only had few components and only two api calls

- Have properly handled errors and loading states in UI as well

- Have adder proper null checks so UI doesnt break

- Have implemented unit testing using React Testing library. Have test all components for render and data. There can be other use cases as well for testing and can be more exhaustive but haven't added that due to time constraint.

- Design is responsive and should work for most screen sizes
