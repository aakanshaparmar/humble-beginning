using namespace std;

#include <iostream>
#include <string>

int main(int argc, char *argv[])
{
	//If all 3 parameters have not been entered
	if ( argc != 4 ) 
    {
    	cout<<"Please enter all 3 - zoom level, latitude and longitude in this order";
    }
	//If correct number of parameters have been eneteredelse 
	{
		string filePathRoot = "cesium/Build/Cesium/Widgets/Images/ImageryProviders";
		std::string tempZoom(argv[1]);
		std::string tempLat(argv[2]);
		std::string tempLon(argv[3]);

		std::string zoom;
		std::string lat;
		std::string lon;

		char temp[5];
		char temp2[5];

		//Truncate get till 2 decimal places of latitude 
		for(int i=0; i<5; i++)
		{
			temp[i]=argv[2][i];
			temp2[i]=argv[3][i];
		}

		lat = temp;
		lon = temp2;
		cout<<lat<<"+"<<lon<<"+"<<endl;	
	}

	return 0;
    
}