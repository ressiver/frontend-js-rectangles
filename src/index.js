'use strict'

function areIntersected(rectangleFirst, rectangleSecond) {
	return (rectangleFirst.top < rectangleSecond.top || rectangleFirst.top > rectangleSecond.top || rectangleFirst.height < rectangleSecond.height || rectangleFirst.height >= rectangleSecond.height)
}

function filterVisible({ }, []) {

}