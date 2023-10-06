import cv2
import cv2 as cv
import numpy as np

image_path = "path-to-image-on-local-system"
net = cv.dnn.readNetFromTensorflow("C:\\Users\\manas\\Downloads\\source code\\dnn\\frozen_inference_graph_coco.pb", "C:\\Users\\manas\\Downloads\\source code\\dnn\\mask_rcnn_inception_v2_coco_2018_01_28.pbtxt")


colors = np.random.randint(0, 255, (80, 3))

img = cv.imread(image_path)
height, width, _ = img.shape

black_image = np.zeros((height, width, 3), np.uint8)

blob = cv.dnn.blobFromImage(img, swapRB=True)

net.setInput(blob)
boxes, masks = net.forward(["detection_out_final", "detection_masks"])
detections_count = boxes.shape[2]
print(detections_count)
print(masks)
# print(boxes)
for i in range(detections_count):
    box = boxes[0,0,i]
    class_id = box[1]
    score = box[2]
    if score<0.01:
        continue
    x = int(box[3] * width)
    y = int(box[4] * height)
    x2 = int(box[5] * width)
    y2 = int(box[6] * height)
    roi = black_image[y:y2, x:x2]
    roi2 = img[y:y2, x:x2]
    roi_height, roi_width, _ = roi.shape
    roi_height2, roi_width2, _ = roi2.shape
    print(x, y)

    mask = masks[i, int(class_id)]

    mask = cv.resize(mask, (roi_width, roi_height))
    _, mask = cv.threshold(mask, 0.5, 255, cv.THRESH_BINARY)
    cv.rectangle(img, (x, y), (x2, y2), (10, 25, 250), 3)
    contours, _ = cv.findContours(np.array(mask, np.uint8), cv2.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
    color =colors[int(class_id)]
    for cnt in contours:
        cv2.fillPoly(roi, [cnt], (int(color[0]), int(color[1]), int(color[2])) )
    for cnt2 in contours:
        cv2.fillPoly(roi2, [cnt2], (int(color[0]), int(color[1]), int(color[2])))

    # # cv.imshow("roi", roi)
    # cv.waitKey(0)



cv.imshow("Image", img)
cv.imshow("Black Image", black_image)


cv.waitKey(0)

