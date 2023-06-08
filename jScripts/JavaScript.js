// משתנה גלובלי אשר יכיל את אינדקס התמונה להצגה
var slideIndex = 1;
 
// בלחיצה על כפתורים, תופעל הפונקציה הבאה
// אליה ישלח 1 אם המשתמש רוצה תמוה קדימה
// או -1 אם המשתמש רוצה לחזור לתמונה הקודמת
function ForwardSlides(n) {
  // בהתאם לפרמטר שהתקבל, נפעיל את הפונקציה להעברת התמונות
  showSlides(slideIndex += n);
}

// פונקציה ראשית להצגת התמונות
// הפונקציה מקבלת פרמטר עם אינדקס התמונה הבאה להצגה
function showSlides(nextIndex) {
  var i;
  var slides = document.getElementsByClassName("imagSlides"); // מכיל את התמונות עם המספור שלהן בתוך מערך
  var ImgCol = document.getElementsByClassName("miniImg");  // מכיל את התמונות הקטנות בתוך מערך בהתאם
  
  // אם האינדקס החדש גדול מכמות התמונות, יחזור לתמונה הראשונה  
  if (nextIndex > slides.length) 
    slideIndex = 1;

  //  במקרה ואינדקס התמונה הבאה קטן 1
  // כלומר המשתמש רוצה לעבור לתמונה לפני ״תמונה 1״
  if (nextIndex < 1) 
    slideIndex = slides.length;
  
  // לולאה ש״תסתיר״ את כל התמונות הראשיות 
  for (i = 0; i < slides.length; i++) 
    slides[i].style.display = "none";

  // בשורת התמונות למטה, ברירת המחדל תהיה תמונה בבהירות נמוכה 
  // התמונה הנבחרת, תהיה במצב מקורי
  // לולאה זו תחליף עבור התמונות ממצב פעיל, לברירת המחדל
  for (i = 0; i < ImgCol.length; i++) 
    ImgCol[i].className = ImgCol[i].className.replace(" active", "");

  // הצגת התמונה הנבחרת
  slides[slideIndex-1].style.display = "block";
  // שינוי מצב התמונה שנבחרה מהתמונות למטה ל״פעיל״ ובהתאם ישתנה העיצוב
  ImgCol[slideIndex-1].className += " active";
  // נכניס את האלט של התמונה אל תוך תיאור התמונה
  document.getElementById("imagTitel").innerHTML = ImgCol[slideIndex-1].alt;
}

// יתרונות וחסרונות
function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // שינוי הצבע של הכפתור בהתאם
  elmnt.style.backgroundColor = color;
}
// ברירת מחדל. כאשר פותחים את הדף, יפתחו היתרונות
function defaultprosandcons(){
  document.getElementById("defaultOpen").click();
}

// בדיקת טופס - צרו קשר
function checkform(contactFORM) {
    if (checkname(contactFORM.firstname, "שם פרטי") &&
        checkname(contactFORM.lastname, "שם משפחה") &&
        checkgender(contactFORM.gender) &&
        checkselect(regform.year, "שנת לידה") &&
        checkselect(regform.month, "חודש לידה") &&
        checkselect(regform.day, "יום לידה") &&
        checkselect(contactFORM.kidomet, "קידומת") &&
        checkphone(contactFORM.phone, "מספר טלפון") &&
        checkMail(contactFORM.email) &&
        checkbox(contactFORM.conditions)){
          return true;
        }
        return false;
}

// בדיקת שם פרטי ושם משפחה
function checkname(field, fieldname) {
    var str = field.value;
    if (str == "") {
        alert("חובה למלא את השדה" + " " + fieldname);
        field.select();
        return false;
    }
    if (str.length < 2) {
        alert("ערך השדה " + " " + fieldname + " " + "קצר מידיי");
        field.select();
        return false;
    }
    for (var i = 0; i < str.length; i++)
        if (!(
            (str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z') ||
            (str[i] >= 'א' && str[i] <= 'ת') ||
            (str[i] == ' ') || (str[i] == '-')
            )) {
            alert("הוכנס תו לא חוקי בשדה" + " " + fieldname);
            field.select();
            return false;
        }
    return true;
}
// בדיקת קידומת
function checkselect(field, fieldname) {
    var str = field.value;
    if (str == "0") {
        alert(" חובה למלא את השדה" + " " + fieldname);
        field.focus();
        return false;
    }
    return true;
}
// בדיקת טלפון
function checkphone(field) {
  var str = field.value;
    if (str.length == 0) {
        alert("חובה למלא את שדה מספר הפלאפון");
        field.focus();
        return false;
    }
    if (str.length < 7) {
        alert("מספר הפלאפון חייב להכיל 7 ספרות בלבד");
        field.select();
        return false;
    }
    for (var i = 0; i < str.length; i++)
        if (!(str[i] >= '0' && str[i] <= '9')) {
            alert("מספר פלאפון חייב להכיל ספרות בלבד");
            field.select();
            return false;
        }
    return true;
}
// בדיקת אימייל
function checkMail(that) {
    var str = that.value;
    if (str.length == 0) {
        alert("חובה למלא את השדה אימייל");
        that.select();
        return (false);
    }

    for (var i = 0; i < str.length; i++)
        if (!(str[i] >= 'a' && str[i] <= 'z' ||
            str[i] >= 'A' && str[i] <= 'Z' ||
            str[i] >= '0' && str[i] <= '9' ||
            str[i] == '-' || str[i] == '_' || str[i] == '.' || str[i] == '@')) {
            alert("הוכנס תו לא חוקי בשדה האימייל");
            that.select();
            return false;
        }

    var arr = str.split("@");
    if (arr.length == 1) {
        alert("האימייל חיב להכיל @");
        that.select();
        return (false);
    }

    if (arr.length > 2) {
        alert("האימייל חיב להכיל @ פעם אחת בלבד");
        that.select();
        return (false);
    }

    var vec1 = arr[0].split(".");
    if (vec1.length > 2) {
        alert("אסור יותר מנקודה אחת בחלק שלפני ה@ ");
        that.select();
        return (false);
    }

    for (var i = 0; i < vec1.length; i++) {
        if (vec1[i].length < 2) {
            alert("חובה לשים לפחות 2 תווים לפני ואחרי הנקודות באימייל");
            that.select();
            return (false);
        }
    }

    var vec2 = arr[1].split(".");
    if (vec2.length == 1) {
        alert("חובה לפחות נקודה אחת בחלק שאחרי ה@");
        that.select();
        return (false);
    }

    if (vec2.length > 3) {
        alert("אסור יותר מ2 נקודות בחלק שאחרי ה@");
        that.select();
        return (false);
    }

    if (vec2.length == 3 && vec2[2].length != 2) {
        alert("חובה 2 תווים בדיוק אחרי הנקודה האחרונה");
        that.select();
        return (false);
    }

    for (var i = 0; i < vec2.length; i++) {
        if (vec2[i].length < 2) {
            alert("חובה לשים לפחות 2 תווים בין הנקודות באימייל");
            that.select();
            return (false);
        }
    }

    if (vec2.length == 2 && vec2[1].length != 3) {
        alert("חובה 3 תווים בדיוק אחרי הנקודה האחרונה");
        that.select();
        return (false);
    }
    return (true);
}
// בדיקת תנאי האתר
function checkbox(field) {
    if (!(field.checked)) {
        alert("חובה לאשר את תנאי האתר")
        return (false);
    }
    return (true);
}
// בדיקת מין
function checkgender(field) {
    for (var i = 0; i < field.length; i++) {
        if (field[i].checked)
            return (true);
    }
    alert("חובה לבחור מין")
    return (false);
}

