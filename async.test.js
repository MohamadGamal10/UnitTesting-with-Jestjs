// -------- دالة وهمية (Mock) --------
// الدالة دي بترجع Promise أو ممكن تستخدم Callback
function fetchData(success = true, useCallback = false, callback = null) {
  if (useCallback && typeof callback === "function") {
    // لو عايز تستخدم كول باك
    setTimeout(() => {
      if (success) {
        callback(null, "peanut butter"); // رجع البيانات
      } else {
        callback("error", null); // رجع خطأ
      }
    }, 500);
    return;
  }

  // لو مش كول باك → Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("peanut butter"); // نجاح
      } else {
        reject("error"); // فشل
      }
    }, 500);
  });
}

// -------- Promises --------
// باستخدام then (لازم نرجع الـ Promise)
test("the data is peanut butter (Promise)", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// -------- Async / Await --------
// طريقة حديثة أوضح وأسهل من then
test("the data is peanut butter (async/await)", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

// مثال على فشل (reject) باستخدام async/await
test("the fetch fails with an error (async/await)", async () => {
  expect.assertions(1); // لازم يتنفذ Expect واحد على الأقل
  try {
    await fetchData(false); // هنا هترجع reject
  } catch (error) {
    expect(error).toMatch("error"); // نتأكد من الرسالة
  }
});

// -------- resolves / rejects --------
// نفس فكرة async/await لكن بشكل مختصر
test("the data is peanut butter (resolves)", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error (rejects)", () => {
  return expect(fetchData(false)).rejects.toMatch("error");
});

// -------- Catch --------
// نفس فكرة الـ reject لكن باستخدام catch
test("the fetch fails with an error (catch)", () => {
  expect.assertions(1); // لازم يتنفذ Expect واحد على الأقل
  return fetchData(false).catch((error) => expect(error).toMatch("error"));
});

// -------- Callbacks --------
// مثال لو عندنا دالة بتستخدم callback بدل Promise
// هنا لازم نستخدم done() عشان نقول لـ Jest إن التست خلص
test("the data is peanut butter (callback)", (done) => {
  function callback(error, data) {
    if (error) {
      done(error); // لو في Error → انهي التست بالخطأ
      return;
    }
    try {
      expect(data).toBe("peanut butter"); // لو صح
      done(); // انهي التست بالنجاح
    } catch (err) {
      done(err); // لو في مشكلة في expect
    }
  }

  fetchData(true, true, callback); // استدعاء الدالة بالكول باك
});
