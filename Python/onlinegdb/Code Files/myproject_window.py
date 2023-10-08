from tkinter.filedialog import askopenfile
import tkinter.font as font
from tkinter import *
from tkinter import messagebox
from PIL import ImageTk,Image

def myprojects(root):
    myprojects = Toplevel(root)
    myprojects.geometry('1280x720')
    myprojects['background']='#3E4145'

    logo_icon = ImageTk.PhotoImage(Image.open("media/onlinegdb.png").resize((228, 74)))
    logo_icon_label = Label(myprojects,image=logo_icon).place(x=0,y=0)
    vertical =Frame(myprojects, bg='#999999', height=1,width=1256).place(x=10,y=84)
    ṇvertical =Frame(myprojects, bg='#999999', height=1,width=1256).place(x=10,y=695)

    myprojects.iconphoto(False, PhotoImage(file = 'media/onlinegdb_icon.png'))
    myprojects.title("My Projects")
    myprojects.resizable(False, False)

    label2=Label(myprojects, text="My Project", fg="white", bg="#3E4145", font=("Arial",40)).place(x=552, y=17)

    entry1=Entry(myprojects, width=24, font=("Arial",10)).place(x=1040,y=132)
    label1=Label(myprojects, text="Search:", fg="white", bg="#3E4145",font=("Arial",10)).place(x=982,y=132)

    button1=Button(myprojects,text="Bin",bg='#00B602', fg="white", width=6, font=("Arial",10)).place(x=341,y=132)
    button2=Button(myprojects,text="New Folder",bg='#00B602', fg="white", width=16, font=("Arial",10)).place(x=197,y=132)
    button3=Button(myprojects,text="New Project",bg='#00B602', fg="white", width=16, font=("Arial",10)).place(x=54,y=132)

    label3=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=223)
    label4=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=280)
    label5=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=337)
    label6=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=394)
    label7=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=451)
    label8=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=508)
    label9=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=565)
    label10=Label(myprojects, bg="#A4A1A1", width=61, font=("Arial",24)).place(x=48, y=622)

    label31=Label(myprojects, text='Learning C++', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=235)
    label41=Label(myprojects, text='Learning Java', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=292)
    label51=Label(myprojects, text='Learning Python', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=349)
    label61=Label(myprojects, text='Learning PHP', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=406)
    label71=Label(myprojects, text='Learning JavaScript', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=463)
    label81=Label(myprojects, text='Learning C#', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=520)
    label91=Label(myprojects, text='Learning C', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=577)
    label101=Label(myprojects, text='Learning SQL', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=81, y=634)

    label31=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=235)
    label41=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=292)
    label51=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=349)
    label61=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=406)
    label71=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=463)
    label81=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=520)
    label91=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=577)
    label101=Label(myprojects, text='Project', bg="#A4A1A1",fg="#000000", font=("Arial",12)).place(x=965, y=634)


    run_icon1 = ImageTk.PhotoImage(Image.open("media/run_icon.png").resize((17, 17)))
    run_icon_button1=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=235)
    run_icon_button2=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=292)
    run_icon_button3=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=349)
    run_icon_button4=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=406)
    run_icon_button5=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=463)
    run_icon_button6=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=520)
    run_icon_button7=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=577)
    run_icon_button8=Button(myprojects,image=run_icon1,borderwidth = 0, bg="#A4A1A1").place(x=1085,y=634)

    icon1 = ImageTk.PhotoImage(Image.open("media/image2.png").resize((17, 17)))
    icon_button1=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=235)
    icon_button2=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=292)
    icon_button3=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=349)
    icon_button4=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=406)
    icon_button5=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=463)
    icon_button6=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=520)
    icon_button7=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=577)
    icon_button8=Button(myprojects,image=icon1,borderwidth = 0, bg="#A4A1A1").place(x=1121,y=634)

    icon11 = ImageTk.PhotoImage(Image.open("media/image3.png").resize((17, 17)))
    icon_button11=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=235)
    icon_button21=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=292)
    icon_button31=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=349)
    icon_button41=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=406)
    icon_button51=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=463)
    icon_button61=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=520)
    icon_button71=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=577)
    icon_button81=Button(myprojects,image=icon11,borderwidth = 0, bg="#A4A1A1").place(x=1152,y=634)

    icon12 = ImageTk.PhotoImage(Image.open("media/image4.png").resize((17, 17)))
    icon_button12=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=235)
    icon_button22=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=292)
    icon_button32=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=349)
    icon_button42=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=406)
    icon_button52=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=463)
    icon_button62=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=520)
    icon_button72=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=577)
    icon_button82=Button(myprojects,image=icon12,borderwidth = 0, bg="#A4A1A1").place(x=1186,y=634)

    icon13 = ImageTk.PhotoImage(Image.open("media/image5.png").resize((17, 17)))
    icon_button13=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=235)
    icon_button23=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=292)
    icon_button33=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=349)
    icon_button43=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=406)
    icon_button53=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=463)
    icon_button63=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=520)
    icon_button73=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=577)
    icon_button83=Button(myprojects,image=icon13,borderwidth = 0, bg="#A4A1A1").place(x=58,y=634)

    myprojects.iconphoto(False, PhotoImage(file = 'media/onlinegdb_icon.png'))
    myprojects.mainloop()