using namespace std;

#include <iostream>
#include <string>
#include <stdio.h>


int main(int argc, char *argv[])
{
	//If all 3 parameters have not been entered
	if ( argc != 4 ) 
    {
    	cout<<"Please enter all 3 - zoom level, latitude and longitude in this order";
    }
	//If correct number of parameters have been eneteredelse 
	else
	{
		string filePathRoot = "cesium/Build/Cesium/Widgets/Images/ImageryProviders";
		std::string zoom(argv[1]);
		std::string lat;
		std::string lon;
		
		//Temp values 
		char temp[6], temp2[6];
		std::string tempDeg (argv[2]);


		//Truncate get till 2 decimal places of latitude 
		bool crossedDecimal=0;
		int decimalCount=0;
		int j=0;

		for(int i=0; i<tempDeg.length(); i++)
		{
			if(crossedDecimal==1)
			{
				if(decimalCount<2)
				{
					temp[j]=tempDeg[i];
					j++;
					decimalCount++;
				}
				else
				{
					i=tempDeg.length();
				}
			}	
			else if (tempDeg[i] == '.')
			{
				crossedDecimal = 1;
			}
			else
			{	
				temp[j]=tempDeg[i];
				j++;
			}
		}

		lat = temp;
		

		//Truncate get till 2 decimal places of longitude
		//Reinitialize values to 0
		tempDeg = argv[3];
		crossedDecimal=0;
		decimalCount=0;
		j=0;

		for(int i=0; i<tempDeg.length(); i++)
		{
			if(crossedDecimal==1)
			{
				if(decimalCount<2)
				{
					temp2[j]=tempDeg[i];
					j++;
					decimalCount++;
				}
				else
				{
					i=tempDeg.length();
				}
			}	
			else if (tempDeg[i] == '.')
			{
				crossedDecimal = 1;
			}
			else
			{	
				temp2[j]=tempDeg[i];
				j++;
			}
		}

		lon = temp2;
		
		//Construct final file path
		std::string finalFilePath;
		finalFilePath = filePathRoot+"/"+zoom+"_"+lat+"_"+lon+".jpg";

		cout<<endl<<"File path of imagery is:"<<endl;
		cout<<finalFilePath<<endl;
	}


	return 0;
    
}