<?php  
 $connect = mysqli_connect("127.0.0.1", "root", "", "food");  
 if(isset($_POST["query"]))  
 {  
      $output = '';  
      $query = "SELECT * FROM location WHERE name LIKE '%".$_POST["query"]."%'";  
      $result = mysqli_query($connect, $query);  
      $output = '<ul class="location-ul">';  
      if(mysqli_num_rows($result) > 0)  
      {  
           while($row = mysqli_fetch_array($result))  
           {  
                $output .= '<li class="list-li">'.$row["name"].'</li>';  
           }  
      }  
      else  
      {  
           $output .= '<li>Address Not Found</li>';  
      }  
      $output .= '</ul>';  
      echo $output;  
 }  
 ?>  