'''
A python application to compress a file to zip
'''
import zipfile

def compress_to_zip(input_file, output_zip):
    try:
        with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
            zipf.write(input_file)
        print(f'{input_file} has been compressed to {output_zip}')
    except Exception as e:
        print(f'An error occurred: {str(e)}')

if __name__ == "__main__":
    input_file = "s.txt"  # Change this to the name of the file you want to compress
    output_zip = "compressed.zip"  # Change this to the desired name of the zip archive

    compress_to_zip(input_file, output_zip)

    
