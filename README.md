## Notes and Execution Instructions
 
## Task 1

	The file to be executed is task1/cesium/task1.html. 
	Once the server is started, the program can be accessed at localhost:8080/task1.html

	Clicking on a point on the globe/map will display a white dot at that location and also display the consequent latitude, longitude values in the top left part of the screen.

## Task 2

	The program written in C++ accepts 3 values - zoom, latitude and longitude. 
	It then returns the complete file path of the imagery. 

	The format of the file path is as follows - 


	1.) Naming convention of the file is - 
		
		zoomValue_latitudeValue_longitudeValue.jpg

		The extension of the image file is assumed to be ".jpg". 
		It can be changed by editing the string variable "extension" on line 99 of task2.cpp

		The latitude and longitude values are truncated upto 2 decimal places for display. 

		For example if input is zoom - 18, latitude - 34.5678 and longitude - 45.6677 file name will be 18_3456_4566.jpg

		The negative sign in some latitude and longitude values will be ignored for naming purposes.

	2.) The root url of the file for the purposes of this program is assumed to be - 
		
		cesium/Build/Cesium/Widgets/Images/ImageryProviders

		It can also be changed by editing the string variable "filePathRoot" on line 18 of task 2.cpp

	3.) The final format of imagery path displayed is - 

		cesium/Build/Cesium/Widgets/Images/ImageryProviders/fileName.jpg

		where "fileName" follows the naming convention mentioned in point 1.

	Execution Instructions-

	The file task2.cpp has already been compiled and saved as "task2" in the same folder. 

	To execute the program enter the following command in the terminal - 

	./task2 zoomLevel latitudeValue longitudeValue


## Task 3

	In task 3 the file to be opened is task3/task3.html. The application uses AJAX to retrieve the JSON object at https://db4.insightglobe.net/career/mail. It then displays the "from", "subject" and "date" values in the form of a table. 

	As the "to" and "folder" values are common in all JSON objects they both have been displayed once only on the top and left side of the screen respectively. 

	The application has been built to resemble an email browser.