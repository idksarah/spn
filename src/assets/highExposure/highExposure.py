import cv2 as cv
import numpy as np
saengjui = cv.imread('./saengJui.jpg')


gray = cv.cvtColor(saengjui, cv.COLOR_BGR2GRAY)

_, mask = cv.threshold(gray, 127, 255, cv.THRESH_TOZERO_INV)

contours, hierarchy = cv.findContours(mask, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)

output = saengjui.copy()

biggest = max(contours, key = cv.contourArea)
cv.drawContours(output, biggest, -1, (0, 255, 255), 2)

yellow = np.full(saengjui.shape, (0, 255, 255), dtype=np.uint8)

yellow_mask = cv.bitwise_and(yellow, yellow, mask=mask)

gaussian = cv.GaussianBlur(yellow_mask, (357, 357), 0)

color = np.array([5, 85, 253], dtype=np.uint8)

gaussian_float = gaussian.astype(np.float32) / 255

colored = (gaussian_float * color).astype(np.uint8)

colored_gray = cv.cvtColor(colored, cv.COLOR_BGR2GRAY)

_, colored_thresh = cv.threshold(colored_gray, 127, 255, cv.THRESH_BINARY)

combined = cv.bitwise_or(yellow_mask, colored)

cv.imshow('cat', combined)

cv.imwrite('transformed-saengjui.jpg', combined)

cv.waitKey()