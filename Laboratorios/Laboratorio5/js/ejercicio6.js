arr = [];

function seis(arr){

    for(var i=0; i<arr.length; i++)
    {
        for(var j=i+1; j<arr.length; j++)
        {
            //If there is a smaller element found on right of the array then swap it.
            if(arr[j] < arr[i])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }

}