package com.nativescript.collectionview;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.util.Log;
import androidx.recyclerview.widget.LinearSmoothScroller;

public class RecyclerView extends androidx.recyclerview.widget.RecyclerView {
    static final String TAG = "RecyclerView";
    public SizeChangedListener sizeChangedListener = null;
    protected com.nativescript.collectionview.SmoothScroller smoothScroller;
    public RecyclerView(Context context) {
        this(context, null);
    }
    public RecyclerView(Context context, android.util.AttributeSet attrs) {
        super(context, attrs);
        smoothScroller = new com.nativescript.collectionview.SmoothScroller(context);
        setHorizontalScrollBarEnabled(true);
        setVerticalScrollBarEnabled(true);
        setHasFixedSize(true);
        setFocusable(true);
        setDescendantFocusability(ViewGroup.FOCUS_AFTER_DESCENDANTS);
    }

    static public RecyclerView createRecyclerView(Context context) {
        RecyclerView result = new RecyclerView(context);
        return result;
    }

    static public View inflate (Context context) {
            return  android.view.LayoutInflater.from(context).inflate(R.layout.collectionview, null, false);
    }

    // @Override
    // protected void onSizeChanged(int w, int h, int oldw, int oldh) {
    //     if (sizeChangedListener != null) {
    //         sizeChangedListener.onSizeChanged(w, h, oldw, oldh);
    //     }
    // }
    @Override
    protected void onMeasure(int widthMeasureSpec, 
                int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        if (sizeChangedListener != null) {
            sizeChangedListener.onMeasure();
        }
    }

    @Override
    public void smoothScrollToPosition(int position) {
        this.smoothScrollToPosition(position, LinearSmoothScroller.SNAP_TO_START);
    }
    public void smoothScrollToPosition(int position, int snapPosition) {
        smoothScroller.snapPreference = snapPosition;
        smoothScroller.setTargetPosition(position);
        getLayoutManager().startSmoothScroll(smoothScroller);
    }
}