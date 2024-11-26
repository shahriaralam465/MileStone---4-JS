/**
 * Task-1 
 * take four parameters, multiply the four numbers and then return the result
 */

function multiplyByFour(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    // console.log(mult)
    return result;

}
const result = multiplyByFour(12, 23, 34, 54);
console.log("Output of the Multiplication", result);


/**
 * এখানে শুরুতে আমাদের বুঝতে হবে আসলে টাস্ক টা কি । 
 * এখানে বলা হয়েছে ৪ টা প্যারামিটার নিতে হবে এবং সেগুলোকে গুন করতে হবে
 * গুন করে সেই মান রিটার্ন করতে হবে 
 * 
 * 
 * 
 * এখানে  multiplyByFour  দ্বারা প্যারামিটার টি ডিক্লেয়ার করছি
 * const result = num1 * num2 * num3 * num4; এর দ্বারা আমরা রেজাল্ট নামে এক্টি ভ্যারিয়েবল ডিক্লেয়ার করেছি , যেখানে ফাংশন অ্যাড করা হয়েছে। ৪ টি নাম্বার গুন করে তার ফলাফল সে রেজাল্ট নামে ভ্যারিয়েবল এ রেখেছে।
 * 
 * এরপর return result; এখানে আমরা সেই ফলাফল টি রিটার্ণ করে দিলাম 
 * 
 * ফাংশনের বাইরে  রেজাল্ট নামে একটি কন্সট্যান্ট ডিক্লেয়ার করে তার মধ্যে আরগুমেন্ট গুলো দিয়ে দিলাম 
 * 
 * কনসোল লগ করে মান আউট পুট করলাম 
 * 
 * 
 */