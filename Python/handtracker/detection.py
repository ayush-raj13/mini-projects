import cv2 as cv
import mediapipe as mp
import imutils


# Declaring MediaPipe objects
mpHands = mp.solutions.hands # type: ignore
hands = mpHands.Hands()
mpDraw = mp.solutions.drawing_utils # type: ignore


# Processing the input image
def process_image(img):
    imgRGB = cv.cvtColor(img, cv.COLOR_BGR2RGB) # type: ignore
    results = hands.process(imgRGB)
    return results


# operating on landmarks 
def draw_hand_connections(img, results):
    if results.multi_hand_landmarks:
        for handLms in results.multi_hand_landmarks:
            for id, lm in enumerate(handLms.landmark):
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                
                cv.circle(img, (cx, cy), 10, (150, 200, 250),-1) # type: ignore

            mpDraw.draw_landmarks(img, handLms, mpHands.HAND_CONNECTIONS)
        return img

#defining main functions
def main():
    cap = cv.VideoCapture(0,cv.CAP_DSHOW) # type: ignore
    while True:
        ret, image = cap.read()
        image = imutils.resize(image, width=500, height=500)
        results = process_image(image)
        draw_hand_connections(image, results)

        cv.imshow("Hand tracker", image) # type: ignore

        if cv.waitKey(1) == ord('a'): # type: ignore
            cap.release()
            cv.destroyAllWindows() # type: ignore

if __name__ == "__main__":
    main()
