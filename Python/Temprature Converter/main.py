import tkinter as tk

def celsius_to_fahrenheit():
    try:
        celsius = float(entry_celsius.get())
        fahrenheit = (celsius * 9/5) + 32
        label_result.config(text=f"{celsius}°C is {fahrenheit:.2f}°F")
    except ValueError:
        label_result.config(text="Invalid input")

def fahrenheit_to_celsius():
    try:
        fahrenheit = float(entry_fahrenheit.get())
        celsius = (fahrenheit - 32) * 5/9
        label_result.config(text=f"{fahrenheit}°F is {celsius:.2f}°C")
    except ValueError:
        label_result.config(text="Invalid input")

def celsius_to_kelvin():
    try:
        celsius = float(entry_celsius.get())
        kelvin = celsius + 273.15
        label_result.config(text=f"{celsius}°C is {kelvin:.2f} K")
    except ValueError:
        label_result.config(text="Invalid input")

def kelvin_to_celsius():
    try:
        kelvin = float(entry_kelvin.get())
        celsius = kelvin - 273.15
        label_result.config(text=f"{kelvin} K is {celsius:.2f}°C")
    except ValueError:
        label_result.config(text="Invalid input")

# Create the main window
root = tk.Tk()
root.title("Temperature Converter")

# Create and place input fields and buttons
entry_celsius = tk.Entry(root)
entry_fahrenheit = tk.Entry(root)
entry_kelvin = tk.Entry(root)

button_c_to_f = tk.Button(root, text="Convert to °F", command=celsius_to_fahrenheit)
button_f_to_c = tk.Button(root, text="Convert to °C", command=fahrenheit_to_celsius)
button_c_to_k = tk.Button(root, text="Convert to K", command=celsius_to_kelvin)
button_k_to_c = tk.Button(root, text="Convert to °C", command=kelvin_to_celsius)

# Create and place result label
label_result = tk.Label(root, text="", font=("Helvetica", 12))

entry_celsius.pack()
button_c_to_f.pack()
button_c_to_k.pack()

entry_fahrenheit.pack()
button_f_to_c.pack()

entry_kelvin.pack()
button_k_to_c.pack()

label_result.pack()

# Start the GUI application
root.mainloop()
