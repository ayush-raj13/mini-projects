from tkinter.filedialog import askopenfile
import tkinter.font as font
from tkinter import *
from tkinter import messagebox
from PIL import ImageTk,Image
from myproject_window import *

root=Tk()
root.resizable(False, False)
root.geometry('1280x720')
root['background']='#3E4145'
root.iconphoto(False, PhotoImage(file = 'media/onlinegdb_icon.png'))
root.title("Online GDB Compiling Website")

root.wm_attributes('-transparentcolor', 'gray51')

logo_icon = ImageTk.PhotoImage(Image.open("media/onlinegdb.png").resize((228, 74)))
logo_icon_label = Label(image=logo_icon).place(x=0,y=0)


lang_c = ImageTk.PhotoImage(Image.open("media/lang_c.png").resize((40, 40)))
lang_c_label = Label(image=lang_c,borderwidth = 0).place(x=640,y=26)

lang_cplusplus = ImageTk.PhotoImage(Image.open("media/lang_cplusplus.png").resize((40, 40)))
lang_cplusplus_label = Label(image=lang_cplusplus,borderwidth = 0).place(x=693,y=26)

lang_java = ImageTk.PhotoImage(Image.open("media/lang_java.png").resize((40, 40)))
lang_java_label = Label(image=lang_java,borderwidth = 0).place(x=747,y=26)

lang_python = ImageTk.PhotoImage(Image.open("media/lang_python.png").resize((40, 40)))
lang_python_label = Label(image=lang_python,borderwidth = 0).place(x=800,y=26)

lang_js = ImageTk.PhotoImage(Image.open("media/lang_js.png").resize((40, 40)))
lang_js_label = Label(image=lang_js,borderwidth = 0).place(x=853,y=26)

lang_info = ImageTk.PhotoImage(Image.open("media/info.png").resize((40, 40)))
lang_info_label=Button(root,image=lang_info,borderwidth = 0,bg= "#3E4145").place(x=906,y=26)

lang_settings = ImageTk.PhotoImage(Image.open("media/settings.png").resize((40, 40)))
lang_settings_label=Button(root,image=lang_settings,borderwidth = 0,bg= "#3E4145").place(x=959,y=26)


vertical =Frame(root, bg='#999999', height=1,width=1256).place(x=10,y=84)

selectpane =Frame(root, bg='#999999', height=36,width=870).place(x=24,y=94)

run_icon = ImageTk.PhotoImage(Image.open("media/run_icon.png").resize((25, 25)))
run_icon_button=Button(root,image=run_icon,borderwidth = 0,bg= "#999999").place(x=755,y=98)

save_icon = ImageTk.PhotoImage(Image.open("media/save_icon.png").resize((25, 25)))
save_icon_button=Button(root,image=save_icon,borderwidth = 0,bg= "#999999").place(x=787,y=98)

download_icon = ImageTk.PhotoImage(Image.open("media/download_icon.png").resize((25, 25)))
download_icon_button=Button(root,image=download_icon,borderwidth = 0,bg= "#999999").place(x=823,y=98)

full_screen_icon = ImageTk.PhotoImage(Image.open("media/full_screen_icon.png").resize((25, 25)))
full_screen_icon_button=Button(root,image=full_screen_icon,borderwidth = 0,bg= "#999999").place(x=858,y=98)

def changed(*args):
   if(clicked.get()=="Select other file ..."):
      file = askopenfile(mode ='r', filetypes =[('Python Files', '*.py')])
clicked = StringVar() 
clicked.trace("w", changed)
clicked.set("Select File")
main_menu = OptionMenu(root, clicked, "ABC.cpp", "sample.java", "Select other file ...",)
main_menu.config(width=20)
main_menu.place(x=37,y=97)


numbering = Label(root, text="1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n10.\n11.\n12.\n13.\n14.\n15.\n16.\n17.\n18.\n19.\n20.\n21.\n22.",bg="#2B2A42", fg="#898686", height=29, width=3,font= ('Arial', 13, ''),anchor="nw").place(x=24,y=136)

code = Text(root, bg="#313248", fg="#FFFFFF", height=27, width=93,font= ('Consolas', 13, ''))
code.insert(INSERT, '//...WELCOME TO ONLINE GDB...\n\n#include<bits/stdc++.h>\nusing namespace std;\nint main()\n{\n\t cout<<"Hello world";\n\treturn 0;\n}')
code.place(x=54,y=136)

left_side_icon = ImageTk.PhotoImage(Image.open("media/left_slide_icon.png").resize((17, 17)))
left_side_icon_button=Button(root,image=left_side_icon,borderwidth = 0,bg="#3E4145").place(x=895,y=360)

horizontal =Frame(root, bg='#999999', height=610,width=7).place(x=911,y=84)

right_side_icon = ImageTk.PhotoImage(Image.open("media/right_slide_icon.png").resize((17, 17)))
right_side_icon_button=Button(root,image=right_side_icon,borderwidth = 0,bg="#3E4145").place(x=918,y=360)

input_label = Label(root, text="Input:",bg="#999999", fg="#FFFFFF", height=1, width=35,font= ('Arial', 13, ''),anchor="w").place(x=938,y=94)

input_frame = Label(root, text="Input your data here",bg="#000000", fg="#FFFFFF", height=7, width=35,font= ('Arial', 12, ''),anchor="nw").place(x=938,y=125)

output_label = Label(root, text="Output:",bg="#999999", fg="#FFFFFF", height=1, width=35,font= ('Arial', 13, ''),anchor="w").place(x=938,y=287)

output_frame = Label(root, text="Hello world",bg="#000000", borderwidth = 0,fg="#FFFFFF", height=10, width=35,font= ('Arial', 12, ''),anchor="nw").place(x=938,y=332)

output_frame1 = Label(root, text="Program Finished...",bg="#000000",borderwidth = 0, fg="#04BF05", height=1, width=35,font= ('Arial', 12, ''),anchor="w").place(x=938,y=490)


IDE_Button = Button(text ="IDE",height=1,width=18,font= ('Arial', 10, ''),bg='#605F5F',fg='#FFFFFF').place(x=938,y=540)

def myprojectsbutton():
   myprojects(root)

My_Projects_Button = Button(text ="My Projects",height=1,width=18,font= ('Arial', 10, ''),command=myprojectsbutton,bg='#605F5F',fg='#FFFFFF').place(x=1098,y=540)

Learn_Programming_Button = Button(text ="Learn Programming",height=1,width=18,font= ('Arial', 10, ''),bg='#605F5F',fg='#FFFFFF').place(x=938,y=579)

Programming_Questions_Button = Button(text ="Programming Questions",height=1,width=18,font= ('Arial', 10, ''),bg='#605F5F',fg='#FFFFFF').place(x=1098,y=579)

Classroom_Button = Button(text ="Classroom",height=1,width=18,font= ('Arial', 10, ''),bg='#605F5F',fg='#FFFFFF').place(x=938,y=619)

About_Us_Button = Button(text ="About Us",height=1,width=18,font= ('Arial', 10, ''),bg='#605F5F',fg='#FFFFFF').place(x=1098,y=619)

display_lang_frame=Frame(root,height=510,width=510,highlightbackground="black",highlightthickness=4,bg="#616161")
display_lang_frame.lift()

def display_lang():
   if(display_lang_frame.winfo_ismapped()==True):
      display_lang_frame.place_forget()
   else: display_lang_frame.place(x=500,y=100)
   
C = Button(display_lang_frame,text ="Ada",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=10)
Algol = Button(display_lang_frame,text ="Algol",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=60)
Bash = Button(display_lang_frame,text ="Bash",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=110)
Basic = Button(display_lang_frame,text ="Basic",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=160)
C = Button(display_lang_frame,text ="C",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=210)
Cplusplus = Button(display_lang_frame,text ="C++",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=260)
Csharp = Button(display_lang_frame,text ="C#",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=310)
Cobol = Button(display_lang_frame,text ="COBOL",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=360)
Dart = Button(display_lang_frame,text ="Dart",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=410)
Delphi = Button(display_lang_frame,text ="Delphi",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=10,y=460)

GNU = Button(display_lang_frame,text ="GNU",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=10)
GO = Button(display_lang_frame,text ="GO",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=60)
IDL = Button(display_lang_frame,text ="IDL",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=110)
Java = Button(display_lang_frame,text ="Java",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=160)
JavaScript = Button(display_lang_frame,text ="JavaScript",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=210)
Kotlin = Button(display_lang_frame,text ="Kotlin",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=260)
Krypton = Button(display_lang_frame,text ="Krypton",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=310)
LISP = Button(display_lang_frame,text ="LISP",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=360)
Live_Script = Button(display_lang_frame,text ="Live Script",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=410)
MATLAB = Button(display_lang_frame,text ="MATLAB",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=180,y=460)

NASM = Button(display_lang_frame,text ="NASM",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=10)
PASCAL = Button(display_lang_frame,text ="PASCAL",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=60)
Perl = Button(display_lang_frame,text ="Perl",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=110)
PROLOG_L = Button(display_lang_frame,text ="PROLOG L",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=160)
R = Button(display_lang_frame,text ="R",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=210)
RAPID = Button(display_lang_frame,text ="RAPID",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=260)
Scala = Button(display_lang_frame,text ="Scala",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=310)
SQl = Button(display_lang_frame,text ="SQL",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=360)
Tom = Button(display_lang_frame,text ="Tom",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=410)
TypeScript = Button(display_lang_frame,text ="TypeScript",height=1,width=15,font= ('Arial', 12, ''),bg='#FFFFFF',fg='#000000').place(x=350,y=460)


lang_menu = ImageTk.PhotoImage(Image.open("media/lang_menu.png").resize((40, 40)))
lang_menu_button=Button(root,image=lang_menu,borderwidth = 0,bg= "#3E4145",command=display_lang).place(x=587,y=26)

display_signin_frame=Frame(root,height=510,width=510,highlightbackground="black",highlightthickness=4,bg="#616161")

sign_in_with = Label(display_signin_frame, text="Sign In With",bg="#616161",borderwidth = 0, fg="#FFFFFF", height=0, width=0,font= ('Arial', 30, ''),anchor="w").place(x=150,y=30)

google_logo = ImageTk.PhotoImage(Image.open("media/google_logo.png").resize((80, 80)))
google_logo_button=Button(display_signin_frame,image=google_logo,borderwidth = 0,bg= "#3E4145",background="#616161").place(x=120,y=100)

facebook_logo = ImageTk.PhotoImage(Image.open("media/facebook_logo.png").resize((80, 80)))
facebook_logo_button=Button(display_signin_frame,image=facebook_logo,borderwidth = 0,bg= "#3E4145",background="#616161").place(x=220,y=100)

github_logo = ImageTk.PhotoImage(Image.open("media/github_logo.png").resize((80, 80)))
github_logo_button=Button(display_signin_frame,image=github_logo,borderwidth = 0,bg= "#3E4145",background="#616161").place(x=310,y=100)

display_signin_frame.lift()
or_text = Label(display_signin_frame, text="OR",bg="#616161",borderwidth = 0, fg="#FFFFFF", height=0, width=0,font= ('Arial', 20, ''),anchor="w").place(x=240,y=200)

email_pass_frame=Frame(display_signin_frame,height=160,width=350,highlightbackground="black",highlightthickness=2,bg="#999999")


authenticate_list=[["abc","abc"],["gaurav","gaurav"],["admin","admin"]]

email = StringVar()
passwd = StringVar()

email_text = Label(email_pass_frame, text="Email ID: ",bg="#999999",borderwidth = 0, fg="#000000",font= ('Arial', 12, ''),anchor="w").place(x=30,y=30)

email_entry=Entry(email_pass_frame,textvariable = email, font=('Arial',10,'normal')).place(x=150,y=30)

pass_text = Label(email_pass_frame, text="Password: ",bg="#999999",borderwidth = 0, fg="#000000",font= ('Arial', 12, ''),anchor="w").place(x=30,y=60)

pass_entry=Entry(email_pass_frame,textvariable = passwd, show="*",font=('Arial',10,'normal')).place(x=150,y=60)

def check_signin():
   email_pass=[email.get(),passwd.get()]
   print(email_pass)
   if(email_pass in authenticate_list):
      messagebox.showinfo("showinfo", "Login Sucessfull!!\n Welcome "+email_pass[0]+".")
      display_signin_frame.place_forget()
   else:
      messagebox.askretrycancel("Error", "Invalid Credentials")  

Sign_In_frame = Button(email_pass_frame,text ="Sign In", command = check_signin,font=("Arial",14,""),bg='#434343',foreground='white').place(x=140,y=90)

forgot_pass_text = Label(email_pass_frame, text="Forgot Password? ",bg="#999999",fg="#0D0AD8",font= ('Arial', 10, ''),anchor="w").place(x=120,y=130)

email_pass_frame.place(x=80,y=250)

forgot_pass_text = Label(display_signin_frame, text="Do not have an account? Sign up! ",bg="#616161",fg="#000000",font= ('Arial', 15, 'bold'),anchor="w").place(x=90,y=450)

def display_signin():
   if(display_signin_frame.winfo_ismapped()==True):
      display_signin_frame.place_forget()
   else: display_signin_frame.place(x=400,y=100)

Sign_In = Button(text ="Sign In", command = display_signin,font=font.Font(family='Arial', size=16),bg='#455B82',foreground='white').place(x=1134,y=27)

copyright_logo = ImageTk.PhotoImage(Image.open("media/copyright_icon.png").resize((18, 18)))
copyright_logo_button=Button(root,image=copyright_logo,borderwidth = 0,bg= "#3E4145",background="#3E4145").place(x=1100,y=670)

email_text = Label(root, text="2016 - 2022 GDB Online",bg="#3E4145",fg="#FFFFFF",font= ('Arial', 10, ''),anchor="w").place(x=1120,y=670)

vertical =Frame(root, bg='#999999', height=1,width=1256).place(x=10,y=695)
root.mainloop()
